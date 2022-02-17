import "reflect-metadata";
import {
  Arg,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@ObjectType()
class Request {
  @Field((type) => String)
  id: string;
  @Field((type) => String)
  requestor: string;
  @Field((type) => String)
  title: string;
  @Field((type) => String)
  body: string;
  @Field((type) => Date)
  dateCreated: Date;
}

@InputType()
class CreateRequestInputs {
  @Field((type) => String)
  requestor: string;
  @Field((type) => String)
  title: string;
  @Field((type) => String)
  body: string;
}

@InputType()
class EditRequestInputs {
  @Field((type) => String)
  id: string;
  @Field((type) => String)
  requestor: string;
  @Field((type) => String)
  title: string;
  @Field((type) => String)
  body: string;
}

@Service()
@Resolver()
export class RequestResolver {
  @Query((returns) => [Request])
  async getRequests() {
    return prisma.requests.findMany();
  }

  @Mutation((returns) => Request)
  async createRequest(
    @Arg("data") data: CreateRequestInputs
  ): Promise<Request> {
    const { body, requestor, title } = data;
    const insertedRequest = await prisma.requests.create({
      data: {
        title,
        body,
        requestor,
      },
    });

    return insertedRequest;
  }

  @Mutation((returns) => Request)
  async editRequest(@Arg("data") data: EditRequestInputs): Promise<Request> {
    const { id, body, requestor, title } = data;
    const updatedRequest = await prisma.requests.update({
      where: { id },
      data: {
        title,
        body,
        requestor,
      },
    });

    return updatedRequest;
  }

  @Mutation((retuns) => Boolean)
  async deleteRequest(@Arg("requestID") requestID: string): Promise<boolean> {
    const result = await prisma.requests.delete({
      where: { id: requestID },
    });

    if (!result) {
      throw new Error("Nothing deleted");
    }

    return true;
  }
}
