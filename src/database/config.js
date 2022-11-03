const DB_URI = `mongodb+srv://brianzrte:${process.env.DB_PASSWORD}@cluster0.n6g8kgn.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

export default  {
    mongodb: {
        uri: DB_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "ecommercech-a23d3",
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY,
        "client_email": "firebase-adminsdk-ytih8@ecommercech-a23d3.iam.gserviceaccount.com",
        "client_id": "101685017203234418971",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ytih8%40ecommercech-a23d3.iam.gserviceaccount.com"
      }
      
}