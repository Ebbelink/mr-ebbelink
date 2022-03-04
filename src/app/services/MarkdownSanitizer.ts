import { environment } from "src/environments/environment";

export const SanitizeMarkdown = (input: string) => {
  // Ensure that images that are set in the backend are using the correct origin instead of just a path
  return input.replace(/\!\[.*?\]\((.*?)\)/gm, function (searchvalue: any, newvalue: any) {
    return searchvalue.replace(newvalue, environment.backendOrigin + newvalue);
  })

};