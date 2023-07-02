import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const {Schema} = mongoose

//Schema oluşturduk
const userSchema = new  Schema({
    // isim
    username: {
        type: String,
        required: [true, "Username area is required"],
        lowarcase: true, // kullanıcı gelip büyük harflerle kullanıcı adı oluşturduğunda onu küçük harfe çeviriyor.
        validate: [validator.isAlphanumeric, "Only Alphanumeric characters"] 
    },
    // email
    email: {
        type: String,
        required: [true, "Email area is required"],
        unique: true,
        validate: [validator.isEmail, "Valid Email is required"], // email check

    },
    // şifre
    password: {
        type: String,
        required: [true, "Password area is required"],
        minLength: [4, "At least 4 characters"], // min karakter sayısı
    }
},
{
    timestamps: true,
}

);

userSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) =>{
        user.password = hash;
        next();
    });
});
//Schemadan model oluşturduk
const User = mongoose.model('User', userSchema); //ikinci parametrede modelimi hangi schemadan oluşturacaksak onu yazıyoruz

export default User;