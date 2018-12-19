
let API_ADDRESS = 'http://39.108.170.219/'


export default {

	HOST: 			      API_ADDRESS,
	LOGIN:    		      API_ADDRESS + 'index.php/Service/Login/login',
    REGCHECK:     	      API_ADDRESS + 'index.php/Service/Login/regCheck',
    CheckPhone:           API_ADDRESS + 'index.php/Service/Login/checkPhone',

    REGISTER:         	  API_ADDRESS + 'index.php/Service/Login/insert',

	ImageUrl:       	  API_ADDRESS + 'Public/Uploads/pic/',
    UPLOADAVATAR:         API_ADDRESS + 'index.php/Service/Photo/upload',
    PhotoAlbum:           API_ADDRESS + 'index.php/Service/PhotoAlbum/index',
    PhotoAlbumUpload:     API_ADDRESS + 'index.php/Service/PhotoAlbum/upload',
    PhotoAlbumDelete:     API_ADDRESS + 'index.php/Service/PhotoAlbum/del',



};


