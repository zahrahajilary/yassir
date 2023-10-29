import React from 'react';
import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event';
import DropDown from "./DropDown";

const filter = 'status';
const selected = {status:'confirmed'}
const onChange=jest.fn()
const label = 'status';
const options =[
    {value: '', label: 'not selected'},
    {value: 'SEATED', label: 'seated'},
    {value: 'CONFIRMED', label: 'confirmed'}]

function renderDropDown(){
    render(<DropDown filter={filter}
                     selected={selected}
                     onChange={onChange}
                     label={label}
    />)
}
describe('Drop Down test component',()=>{
    test('check label is exist in drop Down',()=>{
       renderDropDown()
        const renderLabel = screen.getByText('status');
        expect(renderLabel).toBeInTheDocument()
    })
    test('user clicked on DropDown',
        async ()=>{
           renderDropDown()
        const select = await ( screen.findByRole('combobox',{hidden:true}));
        user.selectOptions(select, 'confirmed');
        expect(onChange).toHaveBeenCalledWith('status', 'CONFIRMED');
    })
})