
class Testimonial {
  image = "";
  content = "";
  author = "";

  constructor(image, content, author) {
      this.image = image;
      this.content = content;
      this.author = author;
  }
  
  html() {
    throw new Error(
      "You should use one of 'AuthorTestimonial' or 'CompanyTestimonial'"
    );
  }
}

class AuthorTestimonial extends Testimonial {
html() {
  return `<div class="testimonial">
          <img src="${this.image}" class="profile-testimonial" />
          <p class="quote">"${this.content}"</p>
          <p class="author">- ${this.author}</p>
      </div>`;
}
}

//hof callback
const datatestimonialBaru = [
  {
    image: "https://plus.unsplash.com/premium_photo-1713800447485-6bc73b9a1992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: "capek bang?",
    author: 'felic'
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1713800447485-6bc73b9a1992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: "capek bang?",
    author: 'felic'
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1713800447485-6bc73b9a1992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: "capek bang?",
    author: 'felic'
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1713800447485-6bc73b9a1992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    content: "capek bang?",
    author: 'felic'
  },
]

const tambahTestimonial = (data, action) => {
  action(data)
}

for(let index = 0; index < datatestimonialBaru.length; index++) {
  tambahTestimonial(datatestimonialBaru[index], (data) => {
    const testimonial  = new AuthorTestimonial (
      data.image,
      data.content,
      data.author
    );
  
    document.getElementById("testimonials").innerHTML += testimonial.html();
  }) 
}