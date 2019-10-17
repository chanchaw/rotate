import { Component } from '@angular/core';


export class SendoutDtl{
  id:number;bill_code:string;client_id:number;bill_type:string;
  orderno:string;specification:string;product_name:string;
  colorno:string;pairs:number;kilo:number;meter:number;
  client_process:string;color:string;is_audit:number;client_material:string;
  bill_date:Date;mill:string;
}

export class BillMain{
  billCode:string;clientName:string;billDate:Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotate';




  tableData:SendoutDtl[] = [];
  billMain:BillMain = new BillMain();

  less:SendoutDtl[] = [];
  more:SendoutDtl[] = [];

  ngOnInit(): void {
    this.buildData();

    // 显示较少的数据，两行数据在手机上旋转90°后显示的位置刚好
    // 表格上对齐、右对齐，当更换为5行数据时，整体会下移，这样效果就不对了
    // 目标是为了在超过5行数据时也能像2行数据显示的效果一样（ 浏览器中位置一样 ）
    this.tableData = this.less;

    // 显示较多的数据
    // this.tableData = this.more;


  }


  // 构建数据用于绑定到UI上
  buildData(){
    // 构建主表数据
    this.billMain.billCode = 'F191017001';
    this.billMain.clientName = '陆羽';
    this.billMain.billDate = new Date();

    // 构建明细表数据
    // 构建3行数据，用于演示数据较少情况下的显示效果
    let d01:SendoutDtl = new SendoutDtl();
    d01.orderno = 'DDH001';d01.product_name = '苹果';d01.specification = '红富士';d01.color = '红色';d01.color = 'red';d01.pairs = 12;d01.kilo = 22;d01.meter = 23;
    this.less.push(d01);
    this.more.push(d01);

    let d02 = new SendoutDtl();
    d02.orderno = 'DDH001';d02.product_name = '苹果';d02.specification = '蛇牌';d02.color = '暗红色';d02.color = 'dark red';d02.pairs = 1;d02.kilo = 2;d02.meter = 3;
    this.less.push(d02);
    this.more.push(d02);

    let d03 = new SendoutDtl();
    d03.orderno = 'DDH002';d03.product_name = '香蕉';d03.specification = '帝王';d03.color = '黄色';d03.color = 'yellow';d03.pairs = 1;d03.kilo = 2;d03.meter = 3;
    this.more.push(d03);

    let d04 = new SendoutDtl();
    d04.orderno = 'DDH002';d04.product_name = '香蕉';d04.specification = '小米';d04.color = '橘色';d04.color = 'ok yellow';d04.pairs = 111;d04.kilo = 222;d04.meter = 323;
    this.more.push(d04);

    let d05 = new SendoutDtl();
    d05.orderno = 'DDH003';d05.product_name = '猕猴桃';d05.specification = '晶莹透亮';d05.color = '绿色';d05.color = 'green';d05.pairs = 11;d05.kilo = 22;d05.meter = 323;
    this.more.push(d05);
    // 构建更多数据，用于演示比较多数据情况下的效果，用于对比
  }


    // 判断是偶数则返回true，从而使表格偶数行变色
    isEven(rowIndex:number){
      if( rowIndex %2 === 0 )
        return false;
      else
        return true;
    }

  
}
