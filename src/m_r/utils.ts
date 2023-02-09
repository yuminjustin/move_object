export const getImageSize = (url: string | undefined): Promise<itemSize> => {
  return new Promise((resolve, reject) => {
    if (url) {
      let image = new Image();
      image.onload = () =>
        resolve({
          width: image.width,
          height: image.height,
        });
      image.onerror = () => reject(new Error("error"));
      image.src = url;
    } else reject(new Error("url is empty"));
  });
};

export const listMaker = (list: Array<mrObject>): Array<mrObject2> => {
  return list.map((item: mrObject, key: number) => {
    return Object.assign(
      { index: key, zIndex: key + 1, left: 0, top: 0, width: 0, height: 0, isDrag: false },
      item
    );
  });
};

export const getNearObject = (tar:mrObject,list: Array<mrObject>,box:any): any => {
  
};
