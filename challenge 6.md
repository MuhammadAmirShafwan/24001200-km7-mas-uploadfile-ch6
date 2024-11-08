import { image } from "node-qr-image"
import imagekit from "./libs/imageKit"

input user - {
    tittle: "Lukisan Rumah",
    body: "Ini lukisan rumah",
    image: "https://i.ibb.co/mcYmD8c/IMG-20201008-122539.jpg",
}

image upload di cloud imagekit
enpoint: {
    upload: /add-image
    view: /get-all-image
    viewDetail: /getData/:id  findUnique
    delete: /delete-image   Hard delete file di cloud dan di DB juga dihapus
    edit: /edit-data/: id
}



url simpan di DB
table AllImages
column:
tittle
description
imageUrl
imageFieldId

