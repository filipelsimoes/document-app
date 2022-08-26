# document-app

The app should be run in a iphone emulator. Command to run the project: yarn ios (Need to have xcode). Before running need to do the following commans:
  
   1. npm install
   2. cd ios pod install

This app consists in a example app for see documents and add documents.
When you add a document you will be notifified.

Functionalities of the app: 

  1. See documents that where sended by the backend provided
  2. Add a document (just local state), when adding you will be notified via toast and notification to the iphone.
  3. Receive notifications via websocket. To display the notifications you should click in the notifications icon on the right top corner.
These notifications are being store in the Logo Screen. After change screening this notifications stop being stored, so if you stay more time on the
LogoScreen you will have more notifications (You can check the number near the icon). After clicking you will receive every notification stored.

The app consists in two screens: 
  
    1. Documents App - Just a logo screen
    2. The documents screen - Here you can see all the documents, notifications (by clicking on the notification icon) and add a document.
    
 When adding a document, you need to insert a name and a version (mandatory), and you can also add documents that are stored in your iphone.
 
 Libraries used: 
 
    "react-native-document-picker" -> for chosing files on the iphone,
    "react-native-gesture-handler" -> needed fot react navigation,
    "react-native-raw-bottom-sheet" -> Drawer for add document
    "react-native-safe-area-context" "react-native-screens" -> Define size of the screens
    "react-native-toast-message" -> After adding a document appears a toast message to notify the user that the document was added,
    "react-native-vector-icons" -> Icons,
    "@react-navigation/native" "@react-navigation/native-stack" "@react-navigation/stack" -> Navigation between screens,
    "@notifee/react-native" -> Notifications to the iphone,
    "axios" -> To do http requests to the backend provided.
 

Stucture of the App:

  I created 3 folders:
  (Also have a colors.js file to use colors from that file to bring consistecy to the colors used in the App.
    
    components -> Components used in the screens.
    screens -> Screens of the app
    navigation -> Where you can add routes to create new screens
    
 Testing: 
 
  I had a problem using Jest and had the followinfg error and i was not capable of resolving.
  So i not have done the testing of the app.
  
      /Users/alexandrasimoes/documents-app/node_modules/@react-native/polyfills/error-guard.js:14
      type ErrorHandler = (error: mixed, isFatal: boolean) => void;
         ^^^^^^^^^^^^

      SyntaxError: Unexpected identifier
    
    
Any question you can contact me via email: filipe.simoes@live.com.pt
 
 
 
  
  
