import React from 'react' 
import {toast} from "react-hot-toast" 
import { catalogData } from '../apis';
import { apiConnector } from '../apiconnector';
export const getCatalogaPageData = async(categoryId) =>
 {
   const toastId = toast.loading("loading...") ;
    let result = [] ;
    try{
        const response = await apiConnector("POST",catalogData.CATALOGPAGEDATA_API,{
            categoryId:categoryId,
        });
        if(!response?.data?.success)
        throw new Error("Could not fetch Category Page Data ");

        result = response?.data ;
         

    }catch(error)
    {
      console.log("CATALOG PAGE DATA API ERROR",error)
      toast.error(error.message) 
      result = error.response?.data
    }
    toast.dismiss(toastId) 
    return result ;
}

 