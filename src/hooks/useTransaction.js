import { useEffect, useState } from "react";
import { fetchApiData } from "../utiils";


const useTransaction = () => {
  const [salesVolume, setSalesVolume] = useState([])
  const [transactionCount, setTransactionCount] = useState([])
  const [averageTransaction, setAverageTransaction] = useState([])
  const [topSellingItems, setTopSellingItems] = useState([])
  const [timeBaseAnalytics, setTimeBaseAnalytics] = useState([])

  const getTransactionSaleVolume = async (type = "All")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getTransactionSaleVolume?type=${type}`)
    setSalesVolume(data?.data)
  }
  const getTransactionCount = async (type = "All")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getTransactionCount?type=${type}`)
    setTransactionCount(data?.data)
  }
  const getAverageTransactionValue = async (type = "All")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getAverageTransactionValue?type=${type}`)
    setAverageTransaction(data?.data)
  }
  const getTopSellingItems = async (type = "All")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getTopSellingItems?type=${type}`)
    setTopSellingItems(data?.data)
  }
  const getTimeBaseAnalytics = async (type = "All")=>{
    const data = await fetchApiData(`https://gabriel-backend.vercel.app/api/v1/Dashboard/getTimeBaseAnalytics?type=${type}`)
    setTimeBaseAnalytics(data?.data)
  }


  useEffect(()=>{
    getTransactionSaleVolume()
    getTransactionCount()
    getAverageTransactionValue()
    getTopSellingItems()
    getTimeBaseAnalytics()
  },[])

  return {
    salesVolume,
    transactionCount,
    averageTransaction,
    topSellingItems,
    timeBaseAnalytics,
    getTransactionSaleVolume,
    getTransactionCount,
    getAverageTransactionValue,
    getTopSellingItems,
    getTimeBaseAnalytics
  };
};

export default useTransaction;