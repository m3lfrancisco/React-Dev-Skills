import React from 'react';
import {useState} from 'react';

function NewSkillForm({addSkill}) {
    const [newSkill, setNewSkill] = useState ({
        name: '',
        level: 3
    });

    function handleAddSkill(evt) {
        const newSkillData = {...newSkill, [evt.target.name]: evt.target.value};
        setNewSkill(newSkillData);
    }

    function handleChange(evt){
        evt.preventDefault();
        addSkill(newSkill);
        setNewSkill({name: '', level: 3});
    }

    return (
        <>
            <form onSubmit={handleChange} className="NewSkillForm">
                <label>Skill</label>
                    <input name="name" 
                        onChange={handleAddSkill}
                        value={newSkill.name}
                        placeholder="New Skill"
                        required
                        pattern='.{4,}'
                    />
                <label>Level</label>
                    <select name="level" value={newSkill.level} onChange={handleAddSkill}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                <button type="submit">ADD SKILL</button>
            </form>
        </>
    );
}

export default NewSkillForm