import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory ,useParams,useLocation} from "react-router-dom";
import ListingCard from '../ListingComponents/ListingCard';


const ListingList = () => {

  const [editListing, setEditListing]= useState(false);

const [property, setProperty] = useState([]);
const history = useHistory();
const location = useLocation();
const params= useParams();


useEffect(() => {
  axios.get("https://reqres.in/api/unknown/")
  .then(res => {
    setProperty(res.data.data)
    console.log(res.data.data)
  })

  .catch(err => console.log(err,'error'))
}, [location])



const updateCard = () => {

    history.pushState('/dashboard')
}

const deleteCard = () => {
    axios
      .delete(`https://reqres.in/api/unknown/${params.id}`)
      .then((res) => {
        history.push("/dashboard");
        setProperty(res.data.data)
        console.log(res.data.data)

      })
      .catch((error) => console.log(error));
  };
 

  if (!property) {
    return <div>Loading movie information...</div>;
  }

return(

<div className="save-wrapper">
  

<div>
{property.map((item, index) => (

<ListingCard   key={index}property = {item}  updateCard= {updateCard} deleteCard= {deleteCard} /> 
  


))} 


 


      </div>
    </div>

); //End of Return 

} //End of ListingList

export default ListingList;