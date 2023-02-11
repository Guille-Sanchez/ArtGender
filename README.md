# Display a piece of art from The Art Institute of Chicago

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)

## Overview

# Challenge:
  The idea is to retrieve information from one API and pass it to another API which guesses the nationality of the artist. The user must be able to get another piece of art on request.

### Screenshot
  #### Mobile
  ![Mobile](./screenshots/mobile.png 'Design in mobile')
  ![Desktop](./screenshots/desktop.png 'Design in desktop')

### Links

- Live Demo URL: [https://art-from-the-art-institute-of-chicago.netlify.app/]

- [My process](#my-process)

  1st API: ``https://api.artic.edu/api/v1/artworks``<br/>
  -Retrieve the information of a piece of art:
    To retrieve the information and image firstly you must select a piece of art.
    Since the API does not provide an ENDPOINT for displaying an aleatory art, one must make the logic behind it.
    This API does not provide a range of exiting ids, so if you request a random number it may not exist.
    However, if you request this API as presented above, it will display the following format:<br/>
    ```
      {
        "pagination": {
        "total": 119050,
        "limit": 12,
        "offset": 0,
        "total_pages": 9921,
        "current_page": 1,
        "next_url": "https://api.artic.edu/api/v1/artworks?page=2"
        }
      }
    ```
    From it you, can iterate to select up to 12 pieces of art from each page. In this case, there are 9921 pages available **API UPDATES DAILY**

    After retrieving the information of a piece of art. In order to display a picture of it, you must pass the image_id of that piece of art to another resource.
    For example:<br/> 
    ``https://api.artic.edu/api/v1/artworks/16564 (https://api.artic.edu/api/v1/artworks/{id})``
    ``https://www.artic.edu/iiif/2/838d8c33-a3b4-68ea-587b-87ceec2011af/full/843,/0/default.jpg``
    ``(https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg)``
  
  2nd API: ``https://api.nationalize.io/?name={INSERT_NAME}``<br/>
  -The API only accepts one word as input. In order to obtain the most likely nationality of the artist by using their name, the input must complain with that.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Useful resources

- [Art Institute of Chicago API Docs](https://api.artic.edu/docs/#quick-start)
- [Nationalize.io API Docs](https://nationalize.io/)
