import './error.scss';

const OfError: React.FC = () => (
    <div className={'error-conteiner'}>
      <span>ОШИБКА ЗАГРУЗКИ!!!</span>
      <p>Проверьте соединение с интернетом и повторите запрос!</p>
    </div>
  );

export default OfError;
