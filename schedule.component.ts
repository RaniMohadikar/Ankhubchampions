import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title=" SCHEDULE";

  data=[
    {
     name:'Rani',
     projects:'Ankhub Champions',
     workassing:'Application development',
     currentlyworking:'Schedule Page',
     meeting:'',
     hours:'7.30',
     },
     {
     name:'Pooja',
     projects:'Ankhub Champions',
     workassing:'UI desing',
     currentlyworking:'Event Page',
     meeting:'',
     hours:'7.30',
     },

     {
      name:'Priti',
      projects:'Ankhub Champions',
      workassing:'Forntend development',
      currentlyworking:'Attendances Page',
      meeting:'',
      hours:'7.30',
      },

      {
        name:'Suraj',
        projects:'Ankhub Champions',
        workassing:'Testing',
        currentlyworking:'Leave Page',
        meeting:'',
        hours:'7.30',
        },

        {
          name:'Nitin',
          projects:'Ankhub Dashboard',
          workassing:'Wed development',
          currentlyworking:'Leave Page',
          meeting:'',
          hours:'7.30',
          },

          {
            name:'Rahul',
            projects:'Ankhub Dashboard',
            workassing:'Web desing',
            currentlyworking:'Event Page',
            meeting:'',
            hours:'7.30',
            },

            {
              name:'Akash',
              projects:'Ankhub Dashboard',
              workassing:'Adds',
              currentlyworking:'Menu Page',
              meeting:'',
              hours:'7.30',
              },

              {
                name:'Monish',
                projects:'Ankhub Dashboard',
                workassing:'Social media marketing',
                currentlyworking:'Post  Page',
                meeting:'',
                hours:'7.30',
                },

                {
                  name:'Ajay',
                  projects:'Ankhub Dashboard',
                  workassing:'Post desing',
                  currentlyworking:'Profile Page',
                  meeting:'',
                  hours:'7.30',
                  },

                  {
                    name:'Atul',
                    projects:'Ankhub Dashboard',
                    workassing:'Graphics desing',
                    currentlyworking:'Dashboard Page',
                    meeting:'',
                    hours:'7.30',
                    },

                    {
                      name:'Rakesh',
                      projects:'Ankhub Dashboard',
                      workassing:'Application development',
                      currentlyworking:'Leave Page',
                      meeting:'',
                      hours:'7.30',
                      },

                      {
                        name:'Ritu',
                        projects:'Ankhub Dashboard',
                        workassing:'Application development',
                        currentlyworking:'Setting Page',
                        meeting:'',
                        hours:'7.30',
                        },
  ]



}
