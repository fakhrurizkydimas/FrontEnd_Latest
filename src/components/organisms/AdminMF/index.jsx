import { ArrowBackIos } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { ExpandMore } from '@material-ui/icons'
import { Line } from '../../atoms'
import { NewsItem, NewsPopular } from '../../molecules'

interface IDropdown {
  text?: string;
  value?: string;
}

const AdminMF = () => {
  const categoryOptions: IDropdown[] = [
    {
      text: 'category 1',
      value: 'cat1',
    },
    {
      text: 'category 2',
      value: 'cat2',
    },
  ];

  const subCategoryOptions: IDropdown[] = [
    {
      text: 'subCategory 1',
      value: 'subCat1',
    },
    {
      text: 'subCategory 2',
      value: 'subCat2',
    },
  ];

  
  const dropdownField = (label: string, opts: IDropdown[]) => (
    <div className='form-group mb-4'>
      <label className="form-label">{label}</label>
      <select className='form-select'>
        {opts.map((item: IDropdown, index: number) => (
          <option key={index} value={item.value}>{item.text}</option>
        ))}
      </select>
    </div>
  )

  return (
    <div className="admin-mf">
      <div className='row'>
        <div className='col-md-4'>
          <div className="navbarWrap p-4 bg-white">
            <a href="#" className="mb-4 d-block">Add</a>
            <a href="#" className="mb-4 d-block">Edit</a>
            <a href="#" className="mb-4 d-block">Delete</a>
            <a href="#" className="mb-4 d-block">Download report</a>
          </div>
        </div>

        <div className='col-md-8'>
          <form action="#" className='bg-white p-4'>
            {dropdownField('Category', categoryOptions)}
            {dropdownField('Sub Category', subCategoryOptions)}
            {/* {dropdownField('Category', categoryOptions)} */}
            {/* <DropdownField options={categoryOptions} label='Category' />
            <DropdownField options={subCategoryOptions} label='Sub category' /> */}
          </form>
        </div>
      </div>      
    </div>
  )
}

export default AdminMF
