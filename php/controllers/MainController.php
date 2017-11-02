<?php
include('models/MainModel.php');
include('library/functions.php');

class MainController {
        private $error;
        
	function __construct() {
            $this->error = array('success' => false, 'error' => 'wrong parameters:');
	}

	function getList() {
            $params = isset($_REQUEST['params']) ? $_REQUEST['params'] : '';
            $position = isset($_REQUEST['position']) ? $_REQUEST['position'] : 1;
            $gender = isset($_REQUEST['gender']) ? $_REQUEST['gender'] : 1;
            $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : -1;
            
            $response = array();
            $model = new MainModel();
            
            switch($params) {
                case 'main_parts':
                    $response = array('front' => array(),
                        'back' => array(),
                        'parts' => array(),
                        'skin' => array('ID' => 11, 'name' => 'კანი', 'position' => 0, 'sub_parts' => array())
                    );  
                    $response['parts'] = $model->getBodyParts($position, $gender, 11);
                    break;
                case 'sub_parts':
                    if($id < 0) {
                        $this->error['error'] .= ' ID not passed';
                        return $this->error;
                    }
                    $response = $model->getSubBodyParts($id, $position, $gender, 11);
                    break;
                case 'symptoms':
                    //TO-DO: add functionality to get symptoms by age and gender (t_symptom_map.age_id,gender)
                    if($id < 0) {
                        $this->error['error'] .= ' ID not passed';
                        return $this->error;
                    }
                    $response = $model->getSymptoms($id);
                    break;
                case 'age_list':
                    $response = $model->getAgeList();
                    break;
                default:
                    $response = $model->getStructure($gender);
            }
            
            return $response;
	}
}

?>