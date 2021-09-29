import {fauna} from '../../../services/fauna'
import {query} from 'faunadb'
import NextAuth from "next-auth"
import Providers from "next-auth/providers"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope:"read:user"
    }),
    Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        
           
      }),
      
  ],

  
  callbacks:{
    async signIn(user, account, profile) {
      const {email} = user
      
    try{  await fauna.query(
        query.Create(
          query.Collection('users'),
          {data: { email } }
        ))
        return true
          }
      catch{
        return false
      }
      
    },
  } 

})
  
