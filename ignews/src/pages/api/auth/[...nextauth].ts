import {query as q} from 'faunadb'
import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import {fauna} from '../../../services/fauna'



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

  
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index("user_email"), q.Casefold(email)))
            ),
            q.Create(q.Collection("user"), {data: {email}}),
            q.Get(q.Match(q.Index("user_email"), q.Casefold(email)))
          )
        );

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
      
    },
  } 

})
  
