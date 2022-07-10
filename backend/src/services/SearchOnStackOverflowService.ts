import axios from "axios";

import { IResearch } from "../interfaces/IGoogleContext";

export class SearchOnStackOverflowService {
  async execute(texttreated: string): Promise<IResearch[] | Error> {
    const searchStackOverflow = texttreated.replace(/\s/g, ";");

    try {
      const searchResults = await axios.get(
        `https://api.stackexchange.com/2.3/questions?&tagged=${searchStackOverflow}&site=stackoverflow`
      );

      const result: IResearch[] = [];

      for (let i = 0; i < searchResults.data.items.length; i += 1) {
        result.push({
          id: i.toString(),
          title: searchResults.data.items[i].title,
          link: searchResults.data.items[i].link,
        });
      }

      return result;
    } catch (error) {
      return new Error("There are something wrong with the server");
    }
  }
}
