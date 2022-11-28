import { reactive } from "vue";

export const store = reactive({
  counterImage : 0,
  counterStory: 1,
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

  stories: [
    {
      name: "Mina Hollace",
      imgUrl: "testimonial-avata-02.jpg",
      story: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
      role: "Freelancer",
    },

    {
      name: "Madley Pondor",
      imgUrl: "testimonial-avata-04.jpg",
      story: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
      role: "IT Specialist",
    },

    {
      name: "Luvic Dubble",
      imgUrl: "testimonial-avata-01.jpg",
      story: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to adopt for learners.",
      role: "Private Tutor",
    },

    {
      name: "Florence Themes",
      imgUrl: "testimonial-avata-03.jpg",
      story: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
      role: "Multimedia Admin",
    },
  ],
})
