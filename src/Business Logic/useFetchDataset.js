import { useState, useContext, useEffect } from 'react';
import { firestore } from '../Firebase/config';
import { AuthContext } from '../Context/AuthenticationContext';
import { collection, query, where, orderBy, onSnapshot  } from 'firebase/firestore';

const useFetchDataset = () => {
    const [ user, ULstatus ] = useContext(AuthContext);
    const [ dataset, setDataset ] = useState();
    const [ DSLstatus, setDSLstatus ] = useState(true);
    const [search, setSearch] = useState("Dermatology"); // Add search state

    useEffect(() => {
        if (ULstatus === false) {
          if (user != null) {
            const uid = user.uid;
            const collectionRef = collection(firestore, 'Reports');
            const queryRef = query(collectionRef, 
              where("userId", "==", uid),
              // search !== "" ? where("Prescription.department", "==", search) : " ",
              orderBy('dateofCreation'));
      
            const unsubscribe = onSnapshot(queryRef, (snapshot) => {
              const data = snapshot.docs.map((doc) => {
                return ([doc.id, doc.data()]);
              });
              setDataset(data);
              setDSLstatus(false);
            });
      
            return () => unsubscribe(); // Unsubscribe from the query when component unmounts
          }
        }
      }, [user, ULstatus]);
      

    return { dataset, DSLstatus }
}

export default useFetchDataset;