const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'kanglerian';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    // tes koneksi

    // if(error) {
    //     return console.log("Koneksi gagal");
    // }
    // console.log("Koneksi berhasil!");

    // Pilih database
    const db = client.db(dbName);

    // Menambahkan satu data ke collections mahasiswa
    // db.collection('mahasiswa').insert(
    //     { 
    //         nama: "Rayhan",
    //         email: "rayhan@gmail.com"
    //     },
    //     (error, result) => {
    //         if(error){
    //             return console.log("Gagal menambahkan data!");
    //         }
    //         console.log(result);
    //     }
    // );

    // Menambahkan banyak data ke collections mahasiswa
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: "Jeruk",
    //         email: "naomi@gmail.com"
    //     },
    //     {
    //         nama: "Apel",
    //         email: "ainun@gmail.com"
    //     }],
    //     (error, result) => {
    //         if(error){
    //             return console.log("Gagal menambahkan data!");
    //         }
    //             console.log(result);
    //     }    
    // );

    // Menampilkan semua data collections mahasiswa
    db
    .collection('mahasiswa')
    .find()
    .toArray((error,result) => {
        if(error){
            return console.log("Error!")
        }
        console.log(result);
    });

    // Menampilkan data berdasarkan kriteria
    // db
    // .collection('mahasiswa')
    // .find({_id : ObjectId('6271beb1b6f1421782058fc8')})
    // .toArray((error,result) => {
    //     if(error){
    //         return console.log("Error!")
    //     }
    //     console.log(result);
    // });

    // Mengubah satu data berdasarkan ID
    // const updatePromise = db
    //     .collection('mahasiswa')
    //     .updateOne(
    //         {
    //             _id : ObjectId('6271beb1b6f1421782058fc8')
    //         },
    //         {
    //             $set:
    //             {
    //                 'email': 'jurigjarian@jurig.com'
    //             }
    //         }
    //     )
    
    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });


    // Mengubah banyak data berdasarkan ID
    // const updateBanyak = db
    //     .collection('mahasiswa')
    //     .updateMany(
    //         { nama: "Lerian" },
    //         { $set: {
    //             nama: "Lerian Febriana, A.Md.Kom"
    //         }}
    //     )
    // updateBanyak.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // });

    // // Menghapus satu data berdasarkan ID
    // db
    // .collection('mahasiswa')
    // .deleteOne({
    //     _id: ObjectId('6270e4cd5e5e0e287534442b')
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // });

    // Menghapus banyak data berdasarkan ID
    // db
    // .collection('mahasiswa')
    // .deleteMany({
    //     nama: 'Naima'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // });
});