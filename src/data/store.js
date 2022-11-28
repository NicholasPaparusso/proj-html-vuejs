import { reactive } from "vue";

export const store = reactive({
  counterImage : 0,
  cards: [
    {
      price: "$30.00",
      title: "How to be Successful: Create A Growth Mindset For Succes",
      nLesson: "3 Lessons",
      nStudents: "50 Students",
      imgUrl: "motivation-course-01-480x298.jpg",
    },

    {
      price: "$30.00",
      title: "How to Build Confidence in Your Abilities",
      nLesson: "1 Lesson",
      nStudents: "50 Strudents",
      imgUrl: "motivation-course-02-480x298.jpg",
    },

    {
      price: "$20.00",
      title: "Productivity Machine - Focus in a Distracted World",
      nLesson: "5 Lessons",
      nStudents: "50 Strudents",
      imgUrl: "motivation-course-03-480x298.jpg",
    },

    {
      price: "$20.00",
      title: "Effective Time Management Mastery - Complete Guide",
      nLesson: "18 Lessons",
      nStudents: "50 Strudents",
      imgUrl: "motivation-course-04-480x298.jpg",
    },

    {
      price: "$25.99",
      title: "Body Language Secrets for Entrepreneurs",
      nLesson: "19 Lessons",
      nStudents: "50 Strudents",
      imgUrl: "motivation-course-05-480x298.jpg",
    },

    {
      price: "$19.99",
      title: "Management Skills: The Science of Leadership",
      nLesson: "17 Lessons",
      nStudents: "50 Strudents",
      imgUrl: "motivation-course-06-480x298.jpg",
    },

  ],

  blogs: [
    {
      date: "May 13, 2020",
      title: "How to Stay True to Your Personal Brand",
      preview: "When it comes to your business or career, you want …",
      imgUrl: "motivation-blog-01-480x325.jpg",
    },

    {
      date: "May 13, 2020",
      title: "5 Vital Lessons in 5 Years of Freelancing",
      preview: "Being self-employed and working from home, it’s easy to get …",
      imgUrl: "motivation-blog-02-480x325.jpg",
    },

    {
      date: "May 13, 2020",
      title: "11 Super Useful Tips for Small-Business Owners",
      preview: "Being a small-business owner poses a ton of challenges. We …",
      imgUrl: "motivation-blog-03-480x325.jpg",
    },

    {
      date: "May 13, 2020",
      title: "How to Give Yourself Grace to Start Again",
      preview: "Forgive yourself for bad habits you may have started or …",
      imgUrl: "motivation-blog-04-480x325.jpg",
    },
  ],

  books: [
    {
      title: 'Alpha man by Maxcoach',
      price: '29.00$',
      imgUrl: 'product-book-11-400x400.jpg',
    },

    {
      title: 'Real man 4.0 by Maxcoach',
      price: '39.00$',
      imgUrl: 'product-book-10-400x400.jpg',
    },
  ],

  partners: [
    {
      name: 'stylus',
      imgUrl: 'client-logo-01-primary.png',
    },

    {
      name: 'tree',
      imgUrl: 'client-logo-02-primary.png',
    },

    {
      name: 'brook',
      imgUrl: 'client-logo-03-primary.png',
    },

    {
      name: 'pencil',
      imgUrl: 'client-logo-04-primary.png',
    },

    {
      name: 'its alive',
      imgUrl: 'client-logo-05-primary.png',
    },

    {
      name: 'sixbase',
      imgUrl: 'client-logo-06-primary.png',
    },

    {
      name: 'nowhere famous',
      imgUrl: 'client-logo-07-primary.png',
    },
  ]
})
