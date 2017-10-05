<?php
include('models/MainModel.php');
include('library/functions.php');

class MainController {
        private $error;
        
	function __construct() {
            $this->error = array('success' => false, 'error' => 'wrong parameters:');
	}

	function getList() {
            $params = isset($_REQUEST['params']) ? $_REQUEST['params'] : 'main_parts';
            $position = isset($_REQUEST['position']) ? $_REQUEST['position'] : 1;
            $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : -1;
            
            $response = array();
            $model = new MainModel();
            
            switch($params) {
                case 'main_parts':
                    $response = $model->getBodyParts($position);
                    break;
                case 'sub_parts':
                    if($id < 0) {
                        $this->error['error'] .= ' ID not passed';
                        return $this->error;
                    }
                    $response = $model->getSubBodyParts($id, $position);
                    break;
                case 'symptoms':
                    if($id < 0) {
                        $this->error['error'] .= ' ID not passed';
                        return $this->error;
                    }
                    $response = $model->getSymptoms($id);
                    break;
            }
            
            return $response;
	}
}

?>