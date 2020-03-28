import { Component, OnInit } from '@angular/core';
import { AssesmentService } from 'src/app/services/assement/assesment.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assesment',
  templateUrl: './add-assesment.component.html',
  styleUrls: ['./add-assesment.component.scss']
})
export class AddAssesmentComponent implements OnInit {


 currentIndex = 0;
  data: any;
 
questions = [
  {_id:1,
    title: 'LEADERSHIP',
    // tslint:disable-next-line:max-line-length
    maintext:'True leaders facilitate their teams by doing what is necessary to help them achieve their results! What is your role as leader?',
    subQuestions:['Do people often come to you with questions or to ask for clarifications?',
                  'Do you easily give and receive direct feedback?',
                  'Do you clearly share business purposes and do you have a good feeling for the progress of your company/team?']
  },
  {_id:2,
    title: 'SIMPLE PLANS',
    // tslint:disable-next-line:max-line-length
    maintext:'Whether it involves the strategie of the organization, a project, or a team, keep it simple! Use a simple standard plan template to achieve all goals. This improves communication, collaboration and productivity.',
    subQuestions:['Do all of your (project)plans contribute to the achievement of the common goals?',
                  'Do  your  plans provide the proper foundation to achieve the targeted goals/results on time and within budget?',
                  'Is the entire organization aware of all (project)plans and do you agree that these plans are in synch with eachother?']
  },
  {_id:3,
    title: 'SHARED PURPOSE',
    // tslint:disable-next-line:max-line-length
    maintext:'A shared purpose describes your objective and how you collaborate to achieve the chosen company goals. When the objective is shared it reflects the joint wishes of all stakeholders.',
    subQuestions:['Is the focus of your shared purpose on exceeding the expectations of the client and is this captured in concrete goals?',
                  // tslint:disable-next-line:max-line-length
                  'Is the joint objective clearly stated and is it in line with the intention of the organization (mission, vision, values and desired method of collaboration)?',
                  'Is this objective being shared by all stakeholders?']
  },
{_id:4,
  title: 'PRODUCTS/SERVICES',
// tslint:disable-next-line:max-line-length
maintext:'The description of products/services are known including its features and benefits. We refer to this as the customer value; the way in which your customers perceives the added value.',
subQuestions:['Are you achieving the optimal price-quality ratio of your products/sevices?',
'Is a system in place to continuously test the added value of the products/services?',
'Is there an ongoing dialogue with the clients about their experiences with your product/services?']
},
{_id:5,
  title: 'WHAT AND HOW',
// tslint:disable-next-line:max-line-length
maintext:'Clear and logical processes are in place that describe the most feasible and effective ways to achieve results. There is a clear distinguish between primary, supporting and management processes.',
// tslint:disable-next-line:max-line-length
subQuestions:['Is it clear what everyone"s role is related to the primary process and are the secondary processes designed to support the primary process?',
// tslint:disable-next-line:max-line-length
'Is the design of the processes based on the most efficient and effective delivery of products and services in line with the expectations of the client?',
'Is a system in use to identify suboptimal processes, so that appropriate measures can be taken?']
},
{_id:6,
  title: 'DESIRED CUSTOMERS / MARKET',
maintext:'Identify your target market by knowing the people that really want or need what you are offering.',
subQuestions:['Did you clearly define the target market for your products/sevices?',
'Do you do business with less-than-preferred clients?',
'Do you put conditions on client relationships?']
},
{_id:7,
  title: '€ IN',
maintext:'Know your financials: revenue-margin-profit.',
subQuestions:['Is there a clear breakdown of revenue by target markets?',
'Did you define financial goals and do you capture revenue-margin-profit summaries?',
'Is every team member aware of his/her contribution to your revenue generation?']
},
{_id:8,
  title: '€ TO INVEST',
maintext:'Determine how much you are willing to invest in order to achieve your shared objectives.',
subQuestions:['Do you define the reason(s) for the investment and do you know your budget?',
'Do you calculate and analyze the return on investment (ROI) prior to investing?',
'Are your investments aligned with the optimal realization of your shared objectives?']
},
{_id:9,
  title: 'FACTUAL DATA',
// tslint:disable-next-line:max-line-length
maintext:'Is the glass half full or half empty? That is an opinion. Determine your current situation by analyzing the information without bias. This knowledge will help you make the right decisions.',
subQuestions:['Is it possible to interpret your data in multiple ways?',
'Do you randomly sample and test your data with reality?',
'Does your data analysis lead to conclusions and decisions?']
},
{_id:10,
  title: 'EYES ON THE ROAD',
// tslint:disable-next-line:max-line-length
maintext:'When you spend too much time looking in the back view mirror, you miss out on what lies ahead of you. Identify success-indicators that will show you were you are and whether you are making progress',
subQuestions:['Is it clear to everyone which targeted goals and results need to be achieved?',
'Do you use a dashboard indicating where team members are relative to the targeted goals?',
'Do you regularly discuss the most effective ways to achieve our joint objectives?']
},
{_id: 11,
  title: 'ASSIGNED OWNERSHIP',
maintext: 'Agreeing on clear roles, responsibilities and specific goals promotes ownership. Ownership leads to accountability.',
subQuestions: ['Do your team members know their roles and responsibilities regarding the realization of the shared objectives?',
'Are team members aware of each other"s responsibilities and do you use a transparent decision making process?',
'Are roles and responsibilities regularly tuned and discussed in the group?']
},
{_id: 12,
  title: '€ OUT',
maintext: 'Know your financial situation: know what you spend and know your costs.',
subQuestions: ['Do you have a good overview of your direct and indirect costs?',
'Do you know your fixed costs and your carried debt?',
'Do you know your future (re) investment needs?']
},
{_id: 13,
  title: 'CLEAR DIRECTIONS',
// tslint:disable-next-line:max-line-length
maintext: 'If you know where you are, and what the shared objectives of the stakeholders are, then you can forge a path towards the definition valuable contributions.',
// tslint:disable-next-line:max-line-length
subQuestions: ['Are you taking a clear direction using the shared business purpose making the description of the "How" (tasks) unnecessary?',
'Is the direction determined with the help of a SWOT-analysis taking into account the interests of the stakeholders?',
'Did all stakeholders commit to follow this direction and is it used to take decisions?']
},
{_id: 14,
  title: 'COUNT ON ME!',
// tslint:disable-next-line:max-line-length
maintext: 'Personal Accountability: Each individual is aware of their personal talents and skills and chooses consciously to contribute to the business purpose.',
subQuestions: ['Does everyone know their own talents, skills, and limitations en does everyone ask for and offer help when needed?',
'Is everyone aware of the role of their emotions while working?',
'Does everyone consciously decide to contribute to the shared purpose?']
},
{_id: 15,
  title: 'FUN-FAIL LEARN GROW',
maintext: 'Focus on progress, not perfection. Develop the habit to simply do your best in everything you do without the fear of failure.',
subQuestions: ['Is there an open debate culture with the goal of learning from each other?',
'Are work sessions regularly held to discuss each other"s ideas, questions, and observations?',
'Is there a clear consultation framework in place tracking the progress towards your goals?']
},
{_id: 16,
  title: 'MEANINGFUL CONTRIBUTION',
// tslint:disable-next-line:max-line-length
maintext: 'the ultimate determining factor whether you enjoy going to work each day is whether you believe the work you do makes some sort of meaningful contribution. Meaningful work is a good predictor of appropriate work attitudes which have a positive influence on job satisfaction and productivity.',
// tslint:disable-next-line:max-line-length
subQuestions: ['Is there an atmosphere in which it is normal for team members to compliment and thank each other for their personal contributions?',
'Do team members feel that they contribute to the development and success of the organization?',
'Is the achievement of success acknowledged and shared within the organization?']
},
{_id: 17,
  title: 'EFFECTIVE USE OF TALENTS',
// tslint:disable-next-line:max-line-length
maintext: 'We believe in the right person, in the right place, at the right time, with the right talent to get the job done, regardless of job title, department or position.',
subQuestions: ['Are you aware of the level of knowledge, skills, and growth potential of key members within your organization?',
'Are you using a system in which all team members can actively contribute to the improvement of the business execution?',
'Do you offer enough opportunities to discuss self-evaluation and continuing education?']
},
{_id: 18,
  title: 'FOCUS ON PRIMARY PROCESS',
// tslint:disable-next-line:max-line-length
maintext: 'A process is a series of actions in order to reach a specific outcome. The primary process contains all actions that are directly related to customer engagement.',
subQuestions: ['Does shared ownership exist and are the shared owners experts in their fields?',
  'Is the client added value continuously taken into account during process (re)design?',
  'Are the processes efficiently designed and constrained to the critical activities needed for effective execution?']
},
{_id: 19,
  title: 'COUNT ON US!',
// tslint:disable-next-line:max-line-length
maintext: 'Team Accountability: We respect, trust and know each other and help each other create new and necessary habits in order to achieve our results.',
// tslint:disable-next-line:max-line-length
subQuestions: ['Do team members want to collaborate in an effective and goal oriented manner and are they unanimous in their communications?',
    'Do team members have respect for each others" ideosyncrasies and do they have the desire to learn from each other?',
    'Are team members aware that the joining of different talents and perspectives form the basis for innovation?']
},
{_id: 20,
  title: 'STEP BY STEP ACHIEVEMENTS',
maintext: 'Nothing ever goes as planned! Celebrate each step towards your goals instead of only focusing on the end result.',
subQuestions: ['Is improved collaboration measured and celebrated?',
      'Are team members willing to admit mistakes and is this seen as an important step towards success?',
      'Are your clients" negative as well as positive experiences shared?']
},
{_id: 21,
  title: 'WE COUNT ON EACH OTHER!',
// tslint:disable-next-line:max-line-length
maintext: 'Cross functional Accountability: Teams within the entire supply chain respect, trust and know each other and help each other create habits in order to achieve results.',
// tslint:disable-next-line:max-line-length
subQuestions: ['Does your cross-functional team know the value of "team accountability" and are they willing to collaborate with other teams in an integral way?',
        'Do you strive for the joint delivery of valuable contributions and does the team do whatever it takes to achieve this?',
        'Do the shared interests outrank personal interests and are decisions made accordingly?']
},
{_id: 22,
  title: 'PARTNERSHIP',
maintext: 'We proactively work together within the whole supply chain to achieve common goals and deliver a meaningful contribution.',
subQuestions: ['Are the values and principles of all stakeholders aligned?',
          'Is profit-sharing as well as risk- and loss-sharing properly established?',
          'Are all partners personally accountable for their own contributions?']
}  ];
answers = [];
currentAnswer = [];



  constructor(private service: AssesmentService, private router: Router, private message: NzMessageService) {}

  ngOnInit() {

  }


 

  pre(): void {
    this.currentIndex -= 1;
    
    this.changeContent();
  }

  next(): void {

    

   if(this.validated(this.currentAnswer)) {

    this.answers[this.currentIndex] = this.currentAnswer.slice();
    console.log(this.answers[this.currentIndex]);
    this.currentIndex += 1;
 
    this.changeContent();

    } 

  }

  done(): void {
    if(this.validated(this.currentAnswer)) {

    this.answers[this.currentIndex] = this.currentAnswer.slice();
   
   
    this.service.saveAssesments(this.answers).subscribe(res => {
    
    this.message.success(res['info']);

this.router.navigateByUrl('/assesments');


    });
  }

  }

  changeContent(): void {
    this.data = this.questions[this.currentIndex];
  }

  validated(answer: Array<number>): boolean {
 
return  answer.length === 3 ;
  }

 



}
