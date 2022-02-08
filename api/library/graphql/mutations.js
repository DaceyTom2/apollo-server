import { addLibrary, deleteLibrary } from "../../../datasets/libraries.js"

export default {
    addLibrary: async (_, {id, name, books}) => { 
        if (addLibrary(id, name, books)){
            return { success: true, message: "Library added" }
        }
        else{
            return { success: false, message: "Failed to add library" }
        }
    },
    deleteLibrary: async (_, {id}) => { 
        if (deleteLibrary(id)){
            return { success: true, message: "Library deleted" }
        }
        else{
            return { success: false, message: "Failed to delete library" }
        }
    },
  };