import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from "../../store/reducers/selectedCharacter";
import { useEffect } from "react";


const DetailsPage = () => {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector((state) => state.selectedCharacter)
  const {id} = useParams()

  useEffect(() => {
     id && dispatch(getDetails(id))
  }, [id])

  console.log(selectedCharacter)

  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage