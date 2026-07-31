import { searchTool } from "../config/tavily.js";

export const searchAgent = async (state) => {
  try {
    const results = await searchTool.invoke({
      query: state.propmt,
    });

    console.log(result);
    return {
      ...state,
      searchResults: results,
      images: results.image,
    };
  } catch (error) {
    console.log(error);
    return {
      ...state,
      searchResults: [],
      images: [],
    };
  }
};
