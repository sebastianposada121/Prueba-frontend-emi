import {Component} from '@angular/core';
import {NgxEchartsDirective} from 'ngx-echarts';
import {EChartsOption} from 'echarts';
import {NgxEchartsConfigModule} from '../../../shared/modules/ngx-echart.module';

@Component({
  selector: 'app-followers-graph',
  standalone: true,
  imports: [
    NgxEchartsDirective,
    NgxEchartsConfigModule
  ],
  templateUrl: './followers-graph.component.html',
  styleUrl: './followers-graph.component.scss'
})
export class FollowersGraphComponent {
  public chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        formatter: (name: string) => {
          if(name.length > 20){
            return name.slice(0, 20) + "...";
          }
          return name;
        }
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [ ],
        type: 'bar'
      }
    ]
  };

  public get users(): string[]{
    return (this.chartOption!.xAxis as any)?.data;
  }

  public get followers(): number[]{
    return (this.chartOption!.series as any)?.[0]?.data as number[];
  }

  private update(): void{
    this.chartOption = {...this.chartOption};
  }

  public clear(): void {
    this.users.splice(0, this.users.length);
    this.followers.splice(0, this.followers.length);
    this.update();
  }

  public addUserFollowers({user, followers}: {user: string, followers: number}): void{
    this.users.push(user);
    this.followers.push(followers);
    this.update();
  }

}
