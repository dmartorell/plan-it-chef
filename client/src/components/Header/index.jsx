/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './style.scss';
import logo from '../../assets/logo-sm.png';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <figure>
        <img className="logo" src={logo} alt="logo" />
      </figure>
      <div className="user-info">
        <span className="user-info__name">Sylvia</span>
        <span className="iconify user-info__icon" data-icon="carbon:user-avatar-filled" data-inline="false" />
      </div>

    </div>
    <div className="header__bottom">
      <form className="header-form">
        <input className="form-input" autoComplete="off" type="text" size="38" placeholder="Paste recipe URL..." />
        <button type="button" className="form-btn">
          <img className="form-btn__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEd0lEQVRoge2ZTWhcVRTHz3/aM03NxCR+gNbqRhemKgTxayviwkWadKNdiZsWF2k34hdiQdy6UbsRN+7iJjVJq6LgSvELCmIVBcFNkpKWqIUkNvec5P1dOAmT57yZ92bem4zt/CCQ+3LuOeefe8/9eE+kR48ePXp0L+hEEJK3ufszJJ8slUqjJG8WEYrIMoAfSH6hqlMALncin8IgOWRm75jZupmxyU8ws7dJ3lRkToWNsJk9CmCa5B0Zu84DOKqqXxeRVyGC3f0JkmdFZH+LLq4CmFDVz/PMS0SklLfDEMIhkjPyX7E/isgkyRFV7VfVfpIjIjIpIhditvtJTocQ7s87v1whOWhmF+rU5gmSif9ckiUzO1m1re37E0nNM8fMU5rksLtPABgnea+IHBQRk39HcJ+IPFZj7gDGVPWzNL43NjaeiqJoVkS2RQI4U13VH6j6XwDwC8lZVZ0BcCWrhlSQ7HP3V83sSooVl2ZGd38haxx3fymtfzP7y91fJtmX1n+qEV5bWzugqjMi8nCG3H9T1REAmxn6CMm97v6riNydodv37n6kv7//YjPDpotWVey3kk2sAHgvq9hqvw0ReStjt0dU9RuStzczbCiYZJ+qzorInbHnSwBeE5FRVa2o6gCAxZjNVxmT3kZV3wfwCoCzAF4XkQdVdUBVKyIyWo19KdbtLnc/Q3Jfq3GlWrPxupkiWYnbxmub5EDLgVNAsmJmH9ZZN15s1eFwnQVqimTdujezv2OCb21LUbocUUf0nySHkvokTml3nxCRwRrnS6p6DAATuizUNkIIhZ6JRUQAUFWPyc7pPezu40l9EgUDOLzDsFR6F8BqA/ufa5rR5ubmSoqc2wbACoDTsWeHk+wbnX4O1bajKDrXKHAURadE5HcRCQBOpdki8oLkuVj7viTbxH3YzFZEZHtxqq7EiSO8m5CsuHvtjFotl8t1F81G29KeWDtqO7POkairkeAdbx/M7J7c0skZd4/nFt+jt2m0aJ3fYVgqjbWZV2EAGIu1zyfZNlq0Pq5tR1E0SXIwyX63IDlEcjL2bK4VRxUzW46dYqZJxmt71yC5x90/ih08lkje0JJDMztR5+g2W72f7iokb3H3uTpH3+fbcVoKIXxax+lyCOGNos/LsVwGq8fdh0IIb5rZH3UGYy7p6Jsl0I1m9l29C3gI4ZOc9CQSQng65UuHL0n25xI06WZiZp5LgAaEEC6mEPsByVRvSFO9tQSwWi6Xj5I8EvvT3swKMgJgvYnJs+Vy+TkAV1P5y5qAme24LZXL5UI/17j74yRPi8jW24zhTsaX+HRKsgshjJvZZTO7tL6+nnh7KSp+EoWNsLsvkjwgIgJgUVUPZo3VTvwkcv/ysMWW2OrvWb8vFUZhgruVrhFcVM3HKayGs9Za2prv2hrOSqdqvmsEd4q2p/Ru87+d0p2iJ/hap+3bTuGH9xjtriHX3Qj3BF/rtF3D3bYvN+O6G+HMggEsNLfqGPNZO7Qi+HiXiJ4HcHy3k+jRo0ePHnnyD9Y/H4QsUaWVAAAAAElFTkSuQmCC" alt="icon" />
        </button>
      </form>
    </div>
  </header>
);

export default Header;
