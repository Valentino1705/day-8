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

const testimonial1  = new AuthorTestimonial (
"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
"Mantap sekali jasnya",
"Felic Valentino"
);

const testimonial2  = new AuthorTestimonial (
  "https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Mikirin apa bro",
  "Satrio Budi"
);

const testimonial3  = new AuthorTestimonial (
"https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=800",
"Apa yang buat kamu bahagia bro",
"Athena"
);


const testimonials = [testimonial1, testimonial2, testimonial3,];

let testimonialsHTML = ``;

for(let index = 0; index < testimonials.length; index++) {
    testimonialsHTML += testimonials[index].html();  
}

document.getElementById("testimonials").innerHTML = testimonialsHTML;

