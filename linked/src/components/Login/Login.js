import React, {useState} from 'react'
import { auth } from '../../firebase'
import "./Login.css"
import {useDispatch} from 'react-redux'
import {login} from '../../features/userSlice'
function Login() {
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")
      const [name,setName] = useState('')
      const [photoUrl,setPhotoUrl] = useState('')
      const dispatch = useDispatch()

      const register=()=>{
            if(!name) {
                 return alert("Please enter a full name") 
            }
            auth
            .createUserWithEmailAndPassword(email,password)
            .then((userAuth)=>{ 
                  userAuth.user
                  .updateProfile(
                        {
                              displayName: name,
                              photoURL:photoUrl 
                        }
                  )
                  .then(()=>{
                        dispatch(
                              login({
                             email:userAuth.user.email,
                             uid: userAuth.user.uid,
                             displayName:name,
                             photoUrl:photoUrl
                        }))
                        }
                        )
            }).catch(error=>alert(error))
                 
            };
      
      const loginTo = ()=>{
            auth.signInWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                  dispatch(
                        login({
                              email:userAuth.user.email,
                              uid: userAuth.user.uid,
                              displayName:userAuth.user.displayName,
                              photoUrl:userAuth.user.photoURL
                        })
                  )
            }).catch(error=>alert(error))
      }
      return(
            <div className="login">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAB1CAMAAADOZ57OAAAAtFBMVEX///8AAAAAZpkAWZLd3d0AX5UAZJgAXJPi6e+90N6Or8jW1ta/v7+Li4tgYGBoaGg2eaXu7u5ISEhSUlJDQ0Pn7/To6Ojz+PswdaGampqioqIAV5H4+PjS4OkqKioSEhIvLy93d3fNzc1/f38gICA6Ojq2traIiIisrKwZGRkLCwvIyMhQUFBbj7KgoKCVlZWpwtSEqMNvb29Nh61tmrnK2eSIq8UQbZ1Dgakyd6Scuc65zdzdb0cLAAAKpElEQVR4nO2da1viPBCGkdLiiidAYYUqJ0HWw6qrvqvu//9fr6UFknkmPdi0EK483yRNSXKbZDKZhErFysrKanu1/6NovZ1vuo47I//AdeqFq//3adMV3Q1dem61DHnOR3fTdd0BXfa9UnAFxKoWWG5VS8NVrbovm66t8fqsl4erWu2/bbq+putvid3rq4O9brq+hqvbLxNX1fu76Qobrn2nXF7upitsuCwvs2R5mSXLyyxZXmbJ8jJLlpdZsrzMkuVlliwvs6Tg5Xmu6xbgWdTAq9k4vKtpqLmZYnm5jvvw/Pz6Uq/rRpaXl39xvbdQ+05P/U0Tx6v/cBmlvr1rHi4jXnfTM0nTi3SlPdxb697XUP3akBRkouGlGoszok8gL88T96ie9AKLeIntvtBNqurMpTwDDcAatCAn+d+ZQzVanGP6BMNLDmT6oXXDRcXrKE1taOO28jeQ+bxgB/hAZzROLl5DmuswdwMZz8t7gJfotDny8IK23bvP3UDG86pjgMV/GjtYHl6PwGsv9wxmPi98yZvGiJw8vI6RVyNvAxnPi4mvONdoIubh1UZe47wNZDov7ye+xNdoIebhdWL7F2Mf4ku2pX/Z+avCzF8YMb0t8xfah/kXYObz+gcved4S+7Aypbny+xCN5+Wd0ie6Op2+uXjR2kBlsst4XlWHntJ63Rr/RmUm5RnmbJxA5vOqOvKK+UCrwzcfr8pYyPInf/PsBC9P6mGv5fjnU/KqVHqRE3GkZ8tyB3h92RwfT6GVuH/gaj56mZvX13KwNm409TTPjvCqevW+9/7yUXe0H5TVwEurdoPXomW9Ig6GWV6xysGrGO0uL7/WaDRqzWweF7/Z9MUclleCtPCq9f5crV5wfdJLZQp15qtMZ5PDCJrllaAkXnOavkfXfbUbfGLwmGAQrcK81t+72Gooi5fn1p2+49b7Tj0+arFsXs3ZpD34ev/V8dEhN1Ql8OowuK7F94xbzBOBRjHE/AmXo9X5Fi/PIVp7e+s0KULjOqcH0XVD52+f73FWZS5ek/u2pLNOlNBqk4To89mZ9CX3s6y8rmjylwQQTWZLbqWeqhpcn11o9h3/4Uf3XNbKPV9/Iyndn96C1rMcUdX99JQe/Vy8oHWWEwXUfPHp+Bd8PqAROvG8uH7QWSf3VA0fig+Q9O/VOebQn7/h711tfzn7NCng5Twwd9Z8OopRMRcvCAiI5cUOOrQBYnndMfmFHVImPkHWgBkTuRF2rYuE4qbhtR/HywP3cKjzU35QLIbXgCZU2OgBphHjePlM7vUOjg/RdYwAGAx4CcrF65Im/fTU99U8sGNiMbxg4FPjIo0Yx4sZuNYToE8NPFbXpAbxvYuRZl5x1ws9cD2sGF7QdhXGyF5pILwyhtdvzClE+cPeKS+5vbkemyV/JSev6mdc854yc1hJvLiZZy2hD6l5MSOXcBaCif3hJZmkMaaGQnp5xV8Gdc5sTJfD6xYmNFlrK1HNC41LATNnkp8dt7kpTTASE+xJTnp5JdxmyFz9VgwvbpkUp1+rVyp5jSCTEPzdhMRJWBR/BkW5icmVLL28koR3v20Hr/UopeKFA+pQKAg1ZqbCouyIZlx1sD98WdqTxxvl0qBcXk/QwbaE13D5SgUvNAzEw2ZjktaWSkntlMfoc9Y2vF8uEMb83FYurwo4E7eE1yqngheuBsRFALENrxKKGX08YoohultmTHrZvCC2qlRe06P5/DfXTOt/ep4XmhPiFgnNQ7dP6DwVBvlztnxHyofxsMXw2n/67/ngib1eHkKDS+TVXqayxpyqjQJeOHJJcfrElscTz+SB0OJgug8FzaxC9PO6fO/XXdet9185axG8/6XxEtzj3MwRTUcsr/hznLSjyJ2EqV04XuIQ+wgZ0SLRzutpdRu66zFd7J1MYKXxknYzmLVv1GM4XuAbmUulIB3lrAKiRBdzH5RggBnR4tfN60k4a8TdzUtj78viRbaJR/BAZNEzvOAj0g/IaPebKSh5QWADUpuS/heEgk6omde+dDSsju4patGXxYtsPeGIGLkCGV7UN0KvwCDJ3BE0sukc9HXYKWHPQoEHRDMv4iL04AFqcJTEC2wAcM9GFIDXiK53aYvRsfXoAvSbTIDBd4HDsU2LGAh6oV5el+TkpQPuenh9ObzgnCx4HaIBE3hRWwNmGXaZFK+g0cGGYcMFdJwniuFFbw5wD+gT9GxmSbxgnxBaOfr35tY8smjMB3PKM0nDCmNusEevC+b1Qq0/uLyjuxlekBW43Cs+RxH2qXdS1hpwq2U2fqpgXnSHy/ugT3Q3M38lN0R0lDYFr6n8pux7WEFx0OBha1gwr5/gf6dPbAsvaK/0vIg9nyZsA4uDK0C2hiXzwtsNd4GXbLInbIVyut1WXtXd5PVLfNNtmhyQ3/IKVBIvacmcKi5K1tTyClUWL9Hhe5b8NNUJZ29swj7cFl4Yz0aVk5fgPEqM6kVNOHuevUrJ8oqUiVcb/ZFr79GIpAynXxoGugp0HehXoMHtlxaPBJ5deCPn7i3aH7WjvHwonuA+ouEZKa+IAwcmezAQ3DC7yYuJxybKwqvBRnMvtyXpJjDuOrLCrUjuKdh6s7wiqXnNucfXIVV0T3EI38UKo7vxMBozUFhekZS8Qtud8ereKL4s3YCIX0TPQlS4Tc3d5MWdJ5KVmtfSW8gsiyOLjp4ro+FsCuH78DcS8BDFtvKa+M0YRdZ0GbyWZgB3YiJMgU6Q7kqBFLejMp16W3nFK/pPVPKCzgCtlZkXt846UXxbqnv9uCrLwLi4OzN59RRNWCQv7nRCaCJgKMZAOYcJXoyYii3Ent/dTV6QAdotOy/uvF7oROIidVvMT034dzfXt+s/ISQh0PU8JNrBf4KFLK9lAyfy4jy7YbAhHxJw3BtHa7RmpzG7iG6vWTuyVIcrr1vHLTxstnxpHl7s/QC7ywut6+VMmmEPTJii2A6WIPjFEctLlmjscaEaNRVJhUQ3YfpcK0H0sOUlS+TFjWDh3mX6riJunWWsdaCh5RUqDS/2wPGIL4pKUoOPkp8nL4bFuOUlS178csE14YnIuJuj1EVJvAViTjz0EK5qecmSefHbLYuktHGI0po46ZaVe2gZyytUOl6VEVOaaO9SsWKikvcl428xGqIpY3mFSsmLXTRFCBqpjk3T4y0xA2lgDNKIAMsrVEpe/GWFy73LNBeg3JIXsn6ThRaHaug/iOUVKi0v1kQYrlJ7CUvnaQ+PeTVZ4/KKP5ZOw6iM4BX55yF0PQevqYIXOIDYG/CE82Vj/p7FQH/meLY5/FYgNl35H0kCfUOW+yrhfHIyrwrPq9moZdDy5xw6NGH5vws5oBi+4hH4HFuYLZH8xHwin6i8bU0u7mKvXPbnArLWhVBgRRWXwvuW308lva8OoXinNIlmrXrKzDKvHZTfqY3Hd+NGrZP2x0KajcPZbDZW9EGFuN+jJ0qRkvqR3eVVkjZz/7zVd2V5mSXLyyxZXmbJ8jJLlpdZsrzMkuVlliwvs3TeT25knWLu3LPKIu0/ARsrvLHIKpvojZLFyvm36fqarq7qp7qKEHcFqVU2/StvBvNwy9Mqs9ZXJhcs181+g70Vav9lcSV5wVLceG71DZ3/Oyhanz8sLTP1P3LYKRinrLQBAAAAAElFTkSuQmCC"/>
                  <form onClick={(e)=>e.preventDefault()}>
                        <input 
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        type="text"
                         placeholder="Full name"/>

                         <input 
                         value={photoUrl}
                         onChange={(e)=>setPhotoUrl(e.target.value)}
                         type="text"
                         placeholder="Profile picture (URL)"
                         />

                         <input 
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         type="email" 
                         placeholder="email"/>
                         <input
                         value={password}
                         onChange={e=>setPassword(e.target.value)}
                         type="password"
                         placeholder="password"
                         />
                           <button type="submit" onClick={loginTo}>Sign in</button>

                  </form>
                  <p>Not a member? <span 
                  className="register"
                  onClick={register}
                  
                  >Register now</span></p>
            </div>
      )
}

export default Login
  