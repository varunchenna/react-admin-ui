import Barbox from '../../components/BarBox/Barbox';
import ChartBox from '../../components/chartBox/ChartBox';
import Topbox from '../../components/topBox/Topbox';
import {  barBoxRevenue, barBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';
import Piebox from '../../components/PieBox/Piebox';
import Bigchartbox from '../../components/BigChartBox/Bigchartbox';

export default function home() {
  return (
    <div className='home'>
      <div className='box box1'>
        <Topbox />
      </div>
      <div className='box box2'> <ChartBox {...chartBoxUser} /></div>
      <div className='box box3'> <ChartBox {...chartBoxProduct} /></div>
      <div className='box box4'> <Piebox /> </div>
      <div className='box box5'> <ChartBox {...chartBoxRevenue} /> </div>
      <div className='box box6'> <ChartBox {...chartBoxConversion} /> </div>
      <div className='box box7'> <Bigchartbox /> </div>
      <div className='box box8'> <Barbox {...barBoxVisit} /> </div>
      <div className='box box9'> <Barbox {...barBoxRevenue} /> </div>
    </div>
  )
}
