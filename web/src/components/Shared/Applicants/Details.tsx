import React from 'react';
import classname from 'classnames';
import style from './Style.module.scss';
import { ApplicationStatusEnum, ApplicationDetailPropsT } from '@/generated/Applicants';
import { Status } from './Status';
import { Icon } from '@iconify/react';

export const Details = ({
  item,
  modify,
  handleChangeStatus,
  changeStatusSuccess,
  message,
  changeStatusLoading,
}: ApplicationDetailPropsT) => {
  const spanStyles = modify
    ? {
        fontSize: '13px',
        fontWeight: 'bold',
      }
    : { fontSize: '12px', fontWeight: 'normal' };

  const infoStyles = modify ? { marginLeft: '0px', marginTop: '2px' } : { marginLeft: '10px' };

  const statusStyles = modify ? { top: 0, right: '0' } : { top: '48px', right: '70px' };

  const [edit, setEdit] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<string>(item.status || '');

  const handleSaveStatus = () => {
    if (value && handleChangeStatus) {
      handleChangeStatus(value);
    }
  };

  React.useEffect(() => {
    if (changeStatusSuccess && message) {
      setEdit(false);
    }
  }, [changeStatusSuccess, message]);

  return (
    <div className={style.applicationDetails}>
      <div className={classname('font-bold text-20')}>{item.names}</div>
      <div className={classname('absolute flex items-center')} style={statusStyles}>
        {!edit ? (
          <>
            <Status status={item.status || ApplicationStatusEnum.New} />
            {modify ? (
              <div className={style.edit}>
                <button
                  type="button"
                  className={classname('outline-none focus:outline-none')}
                  onClick={() => setEdit(true)}
                >
                  <Icon icon="ci:edit" />
                </button>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <select
              className={classname('outline-none focus:outline-none', style.select)}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="">Select status</option>
              {Object.values(ApplicationStatusEnum).map((st, stKey) => (
                <option value={st} key={stKey}>
                  {st}
                </option>
              ))}
            </select>
            <div className={style.edit}>
              <button
                type="button"
                className={classname('outline-none focus:outline-none', style.accept)}
                onClick={handleSaveStatus}
                disabled={changeStatusLoading}
                style={{
                  opacity: changeStatusLoading ? '0.5' : 1,
                  cursor: changeStatusLoading ? 'not-allowed' : 'pointer',
                }}
              >
                <Icon icon="bi:check" fontSize={20} />
              </button>
            </div>
          </>
        )}
      </div>
      <div className={classname('flex items-center')} style={infoStyles}>
        <Icon icon="uil:voicemail-rectangle" fontSize={15} color="black" />
        <span className="ml-2" style={spanStyles}>
          {item.email}
        </span>
      </div>
      <div className={classname('flex items-center')} style={infoStyles}>
        <Icon icon="ion:location-sharp" fontSize={15} color="black" />
        <span className="ml-2" style={spanStyles}>
          {item.location}
        </span>
      </div>
      {modify && (
        <div className={classname('flex items-center')} style={infoStyles}>
          <Icon icon="bi:phone" fontSize={15} color="black" />
          <span className="ml-2" style={spanStyles}>
            {item.phoneNumber}
          </span>
        </div>
      )}
    </div>
  );
};
