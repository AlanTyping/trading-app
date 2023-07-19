import './footer.css'
import { footerStore } from '../zustand/footerState'

export default function Footer() {

  const { footerState, changeFooterState } = footerStore();

  const changeState = () => {
    changeFooterState(footerState);
  }

  return (
    <div id={footerState ? 'footerOn' : 'footerOff'} className='bg-[#061539] border-t-[1px] border-[orange] h-[13vh] w-full text-[white] flex justify-center items-center mt-[2.5%]'>
      <div id={footerState ? 'footerDisplayOff' : 'footerDisplayOn'}>

        <span className={footerState ? 'footerTextOff' : 'footerTextOn'}>Created by 
          <a className={footerState ? 'footerTextOff' : 'text-[orange] border-b-[1px] border-blue-600'} href='https://www.instagram.com/alan_anr/' target='_blank'> Alan</a>
        </span>
        <br />
        <div className={footerState ? 'footerTextOff' : 'footerTextOn'}>
          <span onClick={changeState} className={footerState ? 'footerTextOff' : 'border-b-[1px] border-blue-600 cursor-pointer footerTextOn'}>Support the development with those
            <span className={footerState ? 'footerTextOff' : 'text-[#00a0ec] footerTextOn'}> gains</span>
          </span>
        </div>


        <div className={footerState ? 'secondContentOn relative' : 'secondContentOff'}>
          <button onClick={changeState} className={footerState ? 'top-[10%] left-10 absolute cursor-pointer' : 'secondFooterTextOff'}>Back</button>
          <h3 className={footerState ? 'secondFooterTextOn text-[1.2rem] text-[orange]' : 'secondFooterTextOff'}>crypto transfer</h3><br />
          <span id='cafecito' className={footerState ? 'secondFooterTextOn border-b-[1px] border-blue-600' : 'secondFooterTextOff'}>TMidDcT4HvZj2U1vMzwpgdpReHcahLixTt</span>
        </div>

        <div className={footerState ? 'secondContentOn' : 'secondContentOff'}>
          <a id='cafecito' className={ footerState ? 'border-b-[1px] border-blue-600 secondFooterTextOn' : 'secondFooterTextOff'} href='https://cafecito.app/alantyping' target='_blank'>Buy me a coffee :D</a>
        </div>
      </div>
    </div>
  )
}
