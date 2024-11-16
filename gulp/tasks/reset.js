import {deleteAsync} from 'del';
// export const reset = () => {
//     return await deleteAsync( app.path.clean )
// }

export const reset = async () => {
    return await deleteAsync(app.path.clean);
};