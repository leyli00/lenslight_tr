import mongoose from 'mongoose'

const {Schema} = mongoose

//Schema oluşturduk
const photoSchema = new  Schema({
    // isim
    name: {
        type: String,
        required: true, // name alanını zorunlu hale getiriyor
        trim: true 
    },
    // tanım
    description: {
        type: String,
        required: true,
        trim: true // fotografın tanımı gelirken başta ya da sonda boşluk varsa o boşluklardan kurtulmamızı sağlıyor.
    },
    // yüklenme tarihi
    uploadedAt: {
        type: Date,
        default: Date.now, // fotoğrafı kaydettiğin anın tarihi
    }
});

//Schemadan model oluşturduk
const Photo = mongoose.model('Photo', photoSchema); //ikinci parametrede modelimi hangi schemadan oluşturacaksak onu yazıyoruz

export default Photo;