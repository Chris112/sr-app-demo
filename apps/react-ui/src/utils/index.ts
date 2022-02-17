import { format, formatDistance } from "date-fns";

export function formatDateTimeDistance(
  dateStringISO: string | undefined | null,
  formatString: string
) {
  try {
    if (!dateStringISO) {
      throw new Error("Invalid date");
    }
    const dateObject = new Date(dateStringISO);
    const formattedDate = format(dateObject, formatString);
    const distance = formatDistance(dateObject, new Date(), {
      addSuffix: true,
    });
    return [formattedDate, distance];
  } catch (error) {
    return ["", ""];
  }
}
