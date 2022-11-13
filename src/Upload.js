import './App.css'
import { Amplify } from '@aws-amplify/core';
import '@aws-amplify/ui-react/styles.css';
import { Button } from '@aws-amplify/ui-react';
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { useEffect, useRef } from 'react';
import { Storage } from 'aws-amplify';


const Upload =() => {
    const ref = useRef(null);
   
    useEffect(() => {
    Amplify.configure({
            Auth: {
               identityPoolId: 'us-east-1:988d576a-3daf-49a0-9c5f-d9975c0e45ed',
               region: "us-east-1",
           },
            Storage: {
              AWSS3: {
                bucket: "react-bucket-grepsoft",
                region: "us-east-1",
           },
       },
   });
 }, []);
 
   const handleFileLoad = () => {
     const filename = ref.current.files[0].name;
     Storage.put(filename, ref.current.files[0]).then(resp => {
       console.log(resp);
     }).catch(err => {console.log(err);});
   }
   
      return(
        <div className="Upload">
              <Button variant="contained" className="newf"  style={{marginLeft: '15px'}}><BsFillFileEarmarkArrowUpFill style={{fontSize:'18px', marginRight: '5px'}}/>Upload</Button>
                    <input type="file" ref={ref} onChange={handleFileLoad}/>
         </div>
    );
}

 export default Upload;