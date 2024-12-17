import { RootStateOrAny } from 'react-redux';

const selectorState = (state: RootStateOrAny) => state;
const isSSR = typeof document === 'undefined';
const isDev = process.env.NODE_ENV === 'development';

const TELEGRAM_CHANNELS = [
  { city: 'آذربایجان غربی', link: 'SOME_URL/eshelappwaza' },
  { city: 'آذربایجان شرقی', link: 'SOME_URL/eshelappeaza' },
  { city: 'اردبیل', link: 'SOME_URL/eshelappard' },
  { city: 'گیلان', link: 'SOME_URL/eshelappgila' },
  { city: 'مازندران', link: 'SOME_URL/eshelappmazand' },
  { city: 'گلستان', link: 'SOME_URL/eshelappgolst' },
  { city: 'خراسان شمالی', link: 'SOME_URL/eshelappnokho' },
  { city: 'خراسان رضوی', link: 'SOME_URL/eshelapprakhor' },
  { city: 'خراسان جنوبی', link: 'SOME_URL/eshelappsokho' },
  { city: 'سمنان', link: 'SOME_URL/eshelappsemn' },
  { city: 'تهران', link: 'SOME_URL/eshelappteh' },
  { city: 'البرز', link: 'SOME_URL/eshelappalbor' },
  { city: 'قزوین', link: 'SOME_URL/eshrlappqaz' },
  { city: 'زنجان', link: 'SOME_URL/eshelappzan' },
  { city: 'کردستان', link: 'SOME_URL/eshelappkords' },
  { city: 'کرمانشاه', link: 'SOME_URL/eshelappkerman' },
  { city: 'همدان', link: 'SOME_URL/eshelapphamed' },
  { city: 'مرکزی', link: 'SOME_URL/eshelappmarka' },
  { city: 'قم', link: 'SOME_URL/eshelappqo' },
  { city: 'اصفهان', link: 'SOME_URL/eshelappesfh' },
  { city: 'یزد', link: 'SOME_URL/eshelappyazd' },
  { city: 'چهار محال و بختیاری', link: 'SOME_URL/eshelappchar' },
  { city: 'لرستان', link: 'SOME_URL/eshelapplore' },
  { city: 'ایلام', link: 'SOME_URL/eshelappela' },
  { city: 'خوزستان', link: 'SOME_URL/eshelappkhoze' },
  { city: 'کهگیلویه و بویر احمد', link: 'SOME_URL/eshelappkohg' },
  { city: 'فارس', link: 'SOME_URL/eshelappfars' },
  { city: 'کرمان', link: 'SOME_URL/eshelappkerma' },
  { city: 'سیستان و بلوچستان', link: 'SOME_URL/eshelappsist' },
  { city: 'هرمزگان', link: 'SOME_URL/eshelapphorm' },
  { city: 'بوشهر', link: 'SOME_URL/eshelappbush' },
];

export { isSSR, selectorState, isDev, TELEGRAM_CHANNELS };
