import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
     <Image source={require('./../../assets/images/rocket.jpg')}
     style={{padding: 30,
      marginTop: 65,
      alignItems: 'center'}}/>
     <View>
      <Text style={{padding: 30,
    marginTop: 65,
    alignItems: 'center'}}>Welcome to Iris Learn</Text>
     </View>
    </View>
  )
}


















































































































// import { View, Text, Image, TouchableOpacity } from "react-native";
// import React from "react";
// import app from "./../../assets/images/loginlogo.png";
// import * as WebBrowser from "expo-web-browser";
// import Colors from "../Utils/Colors";
// import google from "./../../assets/images/google.png";
// import { useOAuth } from "@clerk/clerk-expo";
// import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";


// WebBrowser.maybeCompleteAuthSession();

// export default function LoginScreen() {
//     useWarmUpBrowser();
 
//   const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
//   const onPress = React.useCallback(async () => {
//     try {
//       const { createdSessionId, signIn, signUp, setActive } =
//         await startOAuthFlow();
 
//       if (createdSessionId) {
//         setActive({ session: createdSessionId });
//       } else {
//         // Use signIn or signUp for next steps such as MFA
//       }
//     } catch (err) {
//       console.error("OAuth error", err);
//     }
//   }, []);
 
//   return (
//     <View style={{ display: "flex", alignItems: "center" }}>
//       <Image
//         source={app}
//         style={{ width: 450, height: 500, objectFit: "contain", marginTop: 70 }}
//       />
//       <View
//         style={{
//           height: 400,
//           backgroundColor: Colors.PRIMARY,
//           width: 400,
//           marginTop: -100,
//           padding: 20,
//         }}
//       >
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 36,
//             color: Colors.WHITE,
//             fontFamily: "outfit-medium",
//             marginTop: 25,
//           }}
//         >
//           IRIS LEARN
//         </Text>
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 20,
//             color: Colors.WHITE,
//             fontFamily: "outfit-bold",
//             marginTop: 25,
//           }}
//         >
//           Ultimate Place to Learn Designing and get placed in your dream jobs
//         </Text>
//         <TouchableOpacity
       
//           style={{
//             backgroundColor: Colors.WHITE,
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 10,
//             justifyContent: "center",
//             padding: 10,
//             borderRadius: 99,
//             marginTop: 25,
//           }}
//         >
//           <Image source={google} style={{ width: 40, height: 40 }} />
//           <Text
//             style={{
//               fontSize: 20,
//               color: Colors.PRIMARY,
//               fontFamily: "outfit-bold",
//             }}
//           >
//             Sign In with Google
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
