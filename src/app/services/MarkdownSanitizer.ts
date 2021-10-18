import { environment } from "src/environments/environment";

export const SanitizeMarkdown = (input: string) => {

  return input.replace(/\!\[.*?\]\((.*?)\)/gm, function (searchvalue: any, newvalue: any) {
    return searchvalue.replace(newvalue, environment.backendBaseUrl + newvalue);
  })

};