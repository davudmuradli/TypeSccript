import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
  id:number;
  studyGroupId: number;
  title:string;
  keywords:string[];
  eventType: string;
}
type StudyGroup ={
  id:number;
  courseId:number;
  title:string;
  keywords:string[];
  eventType:string;
}

type SearchEventsOptions = {
    query: number | string;
    eventType: string;
  }

function searchEvents(options: SearchEventsOptions) {
  const events : (Course | StudyGroup)[] = options.eventType === 'course' ? courses : studyGroups;
//   if (options.eventType === 'course'){
//     const events: (Course | StudyGroup)[] =  courses;}
//   else{
//     const events: (Course | StudyGroup)[] = studyGroups; 
//   }
 return events.filter((event : Course | StudyGroup) => {
  if ( typeof options.query === 'number'){
    return options.query === event.id;
  }else if(typeof options.query === 'string'){
      return event.keywords.includes(options.query)
  }
})

}

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll (event: Course| StudyGroup){
  enrolledEvents = [...enrolledEvents,event]
}

const searchResults = searchEvents({query : 'art',
    eventType : 'courses'});

enroll(searchResults[0]);

// console.log(searchResults);

console.log(enrolledEvents);



