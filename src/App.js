import './App.css'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Button } from '@aws-amplify/ui-react';
import { useEffect, useRef } from 'react';
import awsExports from './Configuration';
import Upload from './Upload';


Amplify.configure(awsExports);

export default function App() {
 const ref = useRef(null);

   return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log("user", user)
        console.log("signOut", signOut)
        return(
          <main>
            <div className='header'>
              <h2>Dropbox</h2>
              <Button variation="primary" onClick={signOut} className="btn">Sign out</Button>
            </div>
          <Upload/>
            
        </main>
      )}}
    </Authenticator>
  );
}