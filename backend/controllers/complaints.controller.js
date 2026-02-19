import {loadData} from '../services/complaints.service.js'
export async function getData(req,res){
    try {
        const dataList=await loadData()
         res.status(201).json(dataList)
    } catch (error) {
         res.status(500).json({ error: "Failed to fetch " })
    }
    
}
