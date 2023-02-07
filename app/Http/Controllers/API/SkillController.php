<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function get_all_skill(){
        $services=Skill::with('service')->orderBy('id')->get();

        return response()->json([
            'skills' =>$services
        ],200);
    }


    public function create_skill(Request $request){
        $this->validate($request,[
            'name' => 'required',
        ]);

        $skill= new Skill();

        $skill->name=$request->name;
        $skill->proficiency=$request->proficiency;
        $skill->service_id=$request->service_id;
        $skill->save();
    }

    public function update_skill(Request $request,$id)
    {
        $this->validate($request,[
            'name' => 'required',
        ]); 

        $skill= Skill::find($id);

        $skill->name=$request->name;
        $skill->proficiency=$request->proficiency;
        $skill->service_id=$request->service_id;
        $skill->save();
    }

    public function delete_skill($id)
    {
        $skill= Skill::findOrFail($id);
        $skill->delete();
    }
}
