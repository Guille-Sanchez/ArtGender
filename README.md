# ArtGender
  To retrieve the information and image from https://api.artic.edu/api/v1/artworks, firstly you must select a piece of art.
  As the API does not provide an ENDPOINT for displaying an aleatory art, one must make the logic behind it.
  This API does not provide a range of exiting ids, so if you request a random number it may not exist.
  However, if you request this API as presented, it will display the following format:
    "pagination": {
    "total": 119050,
    "limit": 12,
    "offset": 0,
    "total_pages": 9921,
    "current_page": 1,
    "next_url": "https://api.artic.edu/api/v1/artworks?page=2"
  }
  From it you, can iterate to select up to 12 pieces of art from each page. In this case, there are 9921 pages available **API UPDATES DAILY**

  After retrieving the information of a piece of art. In order to display a picture of it, you must pass the image_id of that piece of art to another API.
  For example: https://api.artic.edu/api/v1/artworks/16564 (https://api.artic.edu/api/v1/artworks/{id})
    https://www.artic.edu/iiif/2/838d8c33-a3b4-68ea-587b-87ceec2011af/full/843,/0/default.jpg (https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg)

