
export function parse(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var parsed_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'mipsino';
    
    return parsed_path;
}