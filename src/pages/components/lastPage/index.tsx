import { useEffect, useState } from 'react';
import './style.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import useValidation from '../../../hook/useValidation';
import { useNavigate } from 'react-router-dom';



const Conformation = () => {

    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();

      const toPrev = () => {
        navigate("/services")
      }

    const [inp, setInp] = useState('')
    const [inp2, setInp2] = useState('')
    const [inp3, setInp3] = useState('')
    const [type1, setType1] = useState('email')
    const [type2, setType2] = useState('text')
    const [type3, setType3] = useState('tel')
    const { item } = useValidation()
    const [nameClicked, setNameClicked] = useState(false);
    const [numberClicked, setNumberClicked] = useState(false);
    const [emailClicked, setEmailClicked] = useState(false);

    useEffect(() => {
        const isFormValid =
            item.name === '' && item.phoneNumber === '' && item.email === '' && checkboxChecked;
        setFormValid(isFormValid);
    }, [item.name, item.phoneNumber, item.email, checkboxChecked]);


    useEffect(() => {
        item.func(inp, type1);
    }, [inp, type1]);

    useEffect(() => {
        item.func(inp2, type2);
    }, [inp2, type2]);

    useEffect(() => {
        item.func(inp3, type3);
    }, [inp3, type3]);


    return (
        <div className='L-conformation-block'>
            <div className='L-conformation-top'>
                <h1 className='L-conformation-title'>
                    <MdKeyboardArrowLeft className='L-back-icon' onClick={toPrev}/>
                    Запись
                </h1>
            </div>


            <div className='L-conformation-details'>

                <h3 className='L-conformation-details-record'>Детали записи</h3>

                <div className='L-conformation-records'>
                    selected
                </div>

                <h3 className='L-conformation-details-record'>Итого <span className='L-conformation-price'>0000</span></h3>

            </div>

            <div className='L-conformation-details'>

                <h3 className='L-conformation-details-record'>Ваши данные</h3>

                <div className='L-conformation-inputs'>
                    <label className='L-conformation-label' htmlFor='name'>Имя *</label>
                    <input
                        className='L-conformation-input'
                        id='name'
                        type='text'
                        placeholder='Введите имя'
                        onClick={() => setNameClicked(true)}
                        onChange={(e) => {
                            setInp2(e.target.value);
                            setType2(e.target.type);
                        }}
                    />
                    {nameClicked && <h5 className='L-conformation-item'>{item.name}</h5>}

                    <label className='L-conformation-label' htmlFor='number'>
                        Телефон *
                        <p className='L-conformation-p'>Будет использован для подтверждения записи</p>
                    </label>
                    <input
                        className='L-conformation-input'
                        id='number'
                        type='tel'
                        inputMode='numeric'
                        placeholder='+374'
                        onClick={() => setNumberClicked(true)}
                        onChange={(e) => {
                            setInp3(e.target.value);
                            setType3(e.target.type);
                        }}
                    />
                    {numberClicked && <h5 className='L-conformation-item'>{item.phoneNumber}</h5>}

                    <label className='L-conformation-label' htmlFor='email'>E-mail</label>
                    <input
                        className='L-conformation-input'
                        id='E-mail'
                        type='email'
                        placeholder='Введите e-mail'
                        onClick={() => setEmailClicked(true)}
                        onChange={(e) => {
                            setInp(e.target.value);
                            setType1(e.target.type);
                        }}
                    />
                    {emailClicked && <h5 className='L-conformation-item'>{item.email}</h5>}

                    <label className='L-conformation-label' htmlFor='comment'>количество гостей и имя бренда *</label>
                    <input className='L-conformation-input' id='comment' type="text" placeholder='Комментарий к записи' />

                    <label className='L-conformation-label' htmlFor='hours'>Напоминание</label>
                    <select className='L-conformation-input' id='hours'>
                        <option value="Не отправлять">Не отправлять</option>
                        <option value="За 1 час">За 1 час</option>
                        <option value="За 2 час">За 2 час</option>
                        <option value="За 3 час">За 3 час</option>
                        <option value="За 4 час">За 4 час</option>
                        <option value="За 5 часов">За 5 часов</option>
                        <option value="За 6 часов">За 6 часов</option>
                        <option value="За 7 часов">За 7 часов</option>
                        <option value="За 8 часов">За 8 часов</option>
                        <option value="За 9 часов">За 9 часов</option>
                        <option value="За 12 часов">За 12 часов</option>
                        <option value="За 15 часов">За 15 часов</option>
                        <option value="За 18 часов">За 18 часов</option>
                        <option value="За 21 час">За 21 час</option>
                        <option value="За 24 часа">За 24 часа</option>
                        <option value="За 2 дня">За 2 дня</option>
                        <option value="За 3 дня">За 3 дня</option>
                        <option value="За 5 дней">За 5 дней</option>
                        <option value="За 7 дней">За 7 дней</option>
                    </select>
                </div>
            </div>

            <div>

                <div className='L-conformation-details'>

                    <div className='L-conformation-conformation'>
                        <input
                            type="checkbox"
                            checked={checkboxChecked}
                            onChange={(e) => setCheckboxChecked(e.target.checked)}
                        />


                        <p className='L-conformation-text'>Нажимая «Записаться», вы принимаете Пользовательское соглашение и Политику конфиденциальности.</p>
                    </div>

                    <button type='submit' className='L-conformation-button' disabled={!formValid}>
                        <h4 className='L-conformation-continue'>Записаться</h4>
                    </button>

                </div>



            </div>
        </div>
    );
}


export default Conformation